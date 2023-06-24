import axios, { AxiosInstance, CancelTokenSource } from 'axios';

class WebAPI {
  private instance: AxiosInstance;
  private pendingRequests: Map<string, CancelTokenSource>;

  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
      timeout: 20000,
    });
    this.pendingRequests = new Map<string, CancelTokenSource>();
    this.setupInterceptors();
  }

  private addPendingRequest(config: any): void {
    const url = `${config.url}&${config.method}`;
    const source = axios.CancelToken.source();

    if (!this.pendingRequests.has(url)) {
      this.pendingRequests.set(url, source);
    }
  }

  private removePendingRequest(config: any): void {
    const url = `${config.url}&${config.method}`;

    if (this.pendingRequests.has(url)) {
      const source = this.pendingRequests.get(url);
      source?.cancel();
      this.pendingRequests.delete(url);
    }
  }

  private setupInterceptors(): void {
    this.instance.interceptors.request.use(
      (config: any) => {
        this.removePendingRequest(config);
        this.addPendingRequest(config);
        return config;
      },
      (error: any) => {
        return Promise.reject(error);
      }
    );

    this.instance.interceptors.response.use(
      (response: any) => {
        this.removePendingRequest(response.config);
        return response.data;
      },
      (error: any) => {
        this.removePendingRequest(error.config);
        return Promise.reject(error);
      }
    );
  }

  public getInstance(): AxiosInstance {
    return this.instance;
  }
}

export default WebAPI;
