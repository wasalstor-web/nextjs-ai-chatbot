/**
 * AI-STORE-BUILDER API Client
 * يربط واجهة nextjs-ai-chatbot بباكإند FastAPI للتجارة الإلكترونية
 */

const STORE_API =
  process.env.NEXT_PUBLIC_STORE_API_URL || "http://localhost:8000";

interface RequestOptions {
  method?: string;
  body?: unknown;
  token?: string;
  params?: Record<string, string>;
}

class StoreAPIError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = "StoreAPIError";
    this.status = status;
  }
}

async function request<T>(
  endpoint: string,
  options: RequestOptions = {},
): Promise<T> {
  const { method = "GET", body, token, params } = options;

  let url = `${STORE_API}/api/v1${endpoint}`;
  if (params) {
    const searchParams = new URLSearchParams(params);
    url += `?${searchParams.toString()}`;
  }

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    const errorData = await res
      .json()
      .catch(() => ({ detail: "Unknown error" }));
    throw new StoreAPIError(
      errorData.detail || res.statusText,
      res.status,
    );
  }

  return res.json();
}

// ─── Auth ────────────────────────────────────────────────────
export const storeAuth = {
  login: (email: string, password: string) =>
    request<{ access_token: string; token_type: string }>("/auth/login", {
      method: "POST",
      body: { email, password },
    }),
  register: (data: {
    name: string;
    email: string;
    password: string;
    tenant_name?: string;
  }) => request("/auth/register", { method: "POST", body: data }),
  me: (token: string) =>
    request<{
      id: string;
      email: string;
      name: string;
      tenant_id: string;
    }>("/auth/me", { token }),
};

// ─── Stores ──────────────────────────────────────────────────
export interface Store {
  id: string;
  name: string;
  slug: string;
  store_type: string;
  status: string;
  language: string;
  config: Record<string, unknown>;
  created_at: string;
}

export interface CreateStoreInput {
  name: string;
  store_type: string;
  language?: string;
  template_id?: string;
}

export const storeAPI = {
  list: (token: string) => request<Store[]>("/stores", { token }),
  get: (token: string, id: string) =>
    request<Store>(`/stores/${id}`, { token }),
  create: (token: string, data: CreateStoreInput) =>
    request<Store>("/stores", { method: "POST", token, body: data }),
  update: (token: string, id: string, data: Partial<Store>) =>
    request<Store>(`/stores/${id}`, { method: "PUT", token, body: data }),
  delete: (token: string, id: string) =>
    request(`/stores/${id}`, { method: "DELETE", token }),
};

// ─── Products ────────────────────────────────────────────────
export interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string;
  price: number;
  compare_at_price?: number;
  currency: string;
  sku?: string;
  stock_quantity: number;
  image_url?: string;
  images?: string[];
  is_active: boolean;
  is_featured: boolean;
  category_id?: string;
  created_at: string;
}

export interface ProductListResponse {
  items: Product[];
  total: number;
  page: number;
  page_size: number;
}

export const productAPI = {
  list: (
    token: string,
    storeId: string,
    params?: Record<string, string>,
  ) =>
    request<ProductListResponse>(`/stores/${storeId}/products`, {
      token,
      params,
    }),
  get: (token: string, storeId: string, productId: string) =>
    request<Product>(`/stores/${storeId}/products/${productId}`, {
      token,
    }),
  create: (token: string, storeId: string, data: Partial<Product>) =>
    request<Product>(`/stores/${storeId}/products`, {
      method: "POST",
      token,
      body: data,
    }),
  update: (
    token: string,
    storeId: string,
    productId: string,
    data: Partial<Product>,
  ) =>
    request<Product>(`/stores/${storeId}/products/${productId}`, {
      method: "PUT",
      token,
      body: data,
    }),
  delete: (token: string, storeId: string, productId: string) =>
    request(`/stores/${storeId}/products/${productId}`, {
      method: "DELETE",
      token,
    }),
};

// ─── Orders ──────────────────────────────────────────────────
export interface Order {
  id: string;
  order_number: string;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  subtotal: number;
  tax_amount: number;
  shipping_cost: number;
  total: number;
  currency: string;
  status: string;
  payment_status: string;
  payment_method?: string;
  created_at: string;
  items: OrderItem[];
}

export interface OrderItem {
  product_id: string;
  product_name: string;
  quantity: number;
  unit_price: number;
  total_price: number;
}

export interface OrderListResponse {
  items: Order[];
  total: number;
  page: number;
  page_size: number;
}

export const orderAPI = {
  list: (
    token: string,
    storeId: string,
    params?: Record<string, string>,
  ) =>
    request<OrderListResponse>(`/stores/${storeId}/orders`, {
      token,
      params,
    }),
  get: (token: string, storeId: string, orderId: string) =>
    request<Order>(`/stores/${storeId}/orders/${orderId}`, { token }),
  update: (
    token: string,
    storeId: string,
    orderId: string,
    data: { status?: string },
  ) =>
    request<Order>(`/stores/${storeId}/orders/${orderId}`, {
      method: "PUT",
      token,
      body: data,
    }),
};

// ─── Categories ──────────────────────────────────────────────
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image_url?: string;
  sort_order: number;
}

export const categoryAPI = {
  list: (token: string, storeId: string) =>
    request<Category[]>(`/stores/${storeId}/categories`, { token }),
  create: (token: string, storeId: string, data: Partial<Category>) =>
    request<Category>(`/stores/${storeId}/categories`, {
      method: "POST",
      token,
      body: data,
    }),
};

// ─── AI Chat ─────────────────────────────────────────────────
export interface AIChatRequest {
  message: string;
  current_html: string;
  store_name?: string;
  store_type?: string;
}

export interface AIChatResponse {
  html: string;
  message: string;
}

export const aiChatAPI = {
  send: (token: string, data: AIChatRequest) =>
    request<AIChatResponse>("/ai/chat", {
      method: "POST",
      token,
      body: data,
    }),
};

// ─── Payments ────────────────────────────────────────────────
export const paymentAPI = {
  create: (token: string, orderId: string, gateway = "moyasar") =>
    request<{
      payment_id: string;
      redirect_url: string;
      order_number: string;
    }>(`/orders/${orderId}/pay`, {
      method: "POST",
      token,
      params: { gateway },
    }),
};
