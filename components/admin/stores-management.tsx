"use client";

import {
  Edit,
  ExternalLink,
  Eye,
  Globe,
  MoreVertical,
  Package,
  Plus,
  Search,
  ShoppingBag,
  ShoppingCart,
  Trash2,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface StoreItem {
  id: string;
  name: string;
  slug: string;
  store_type: string;
  status: string;
  products_count: number;
  orders_count: number;
  revenue: number;
  created_at: string;
}

const STORE_TYPES: Record<
  string,
  { label: string; emoji: string; color: string }
> = {
  fashion: {
    label: "أزياء",
    emoji: "👗",
    color: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20",
  },
  electronics: {
    label: "إلكترونيات",
    emoji: "📱",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
  beauty: {
    label: "تجميل",
    emoji: "💄",
    color: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
  },
  food: {
    label: "أغذية",
    emoji: "🍔",
    color:
      "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  },
  jewelry: {
    label: "مجوهرات",
    emoji: "💎",
    color:
      "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
  },
  sports: {
    label: "رياضة",
    emoji: "⚽",
    color:
      "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  },
  kids: {
    label: "أطفال",
    emoji: "🧸",
    color:
      "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  },
  home: {
    label: "منزل",
    emoji: "🏠",
    color:
      "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  },
  perfume: {
    label: "عطور",
    emoji: "🌹",
    color:
      "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  },
  health: {
    label: "صحة",
    emoji: "💚",
    color:
      "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  auto: {
    label: "سيارات",
    emoji: "🚗",
    color:
      "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20",
  },
  general: {
    label: "عام",
    emoji: "🛍️",
    color: "bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20",
  },
};

const STATUS_MAP: Record<
  string,
  {
    label: string;
    variant: "default" | "secondary" | "destructive" | "outline";
  }
> = {
  active: { label: "نشط", variant: "default" },
  pending: { label: "قيد الإنشاء", variant: "secondary" },
  draft: { label: "مسودة", variant: "outline" },
  suspended: { label: "معلق", variant: "destructive" },
};

// بيانات تجريبية — تُستبدل بالاتصال الفعلي مع AI-STORE-BUILDER API
const DEMO_STORES: StoreItem[] = [
  {
    id: "1",
    name: "أناقَة",
    slug: "elegance",
    store_type: "fashion",
    status: "active",
    products_count: 48,
    orders_count: 156,
    revenue: 45_600,
    created_at: "2026-01-15",
  },
  {
    id: "2",
    name: "تِك ماكس",
    slug: "techmax",
    store_type: "electronics",
    status: "active",
    products_count: 32,
    orders_count: 89,
    revenue: 128_900,
    created_at: "2026-01-20",
  },
  {
    id: "3",
    name: "بيوتي جلو",
    slug: "beautyglow",
    store_type: "beauty",
    status: "pending",
    products_count: 24,
    orders_count: 0,
    revenue: 0,
    created_at: "2026-02-01",
  },
  {
    id: "4",
    name: "ذَواقة",
    slug: "gourmet",
    store_type: "food",
    status: "active",
    products_count: 56,
    orders_count: 234,
    revenue: 18_700,
    created_at: "2026-01-10",
  },
];

export function StoresManagement() {
  const [stores, setStores] = useState<StoreItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // TODO: استبدال بـ storeAPI.list() الفعلي
    const timer = setTimeout(() => {
      setStores(DEMO_STORES);
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const filteredStores = stores.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.slug.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalRevenue = stores.reduce((sum, s) => sum + s.revenue, 0);
  const totalOrders = stores.reduce((sum, s) => sum + s.orders_count, 0);
  const totalProducts = stores.reduce((sum, s) => sum + s.products_count, 0);

  if (loading) {
    return (
      <div className="flex-1 space-y-6 p-4 pt-6 md:p-8">
        <Skeleton className="h-10 w-56" />
        <div className="grid gap-4 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton className="h-24 rounded-xl" key={`stat-sk-${i}`} />
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton className="h-64 rounded-xl" key={`card-sk-${i}`} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-6 p-4 pt-6 md:p-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-bold text-3xl tracking-tight">إدارة المتاجر</h2>
          <p className="mt-1 text-muted-foreground">
            إنشاء وإدارة متاجرك الإلكترونية بالذكاء الاصطناعي
          </p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          إنشاء متجر جديد
        </Button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          {
            label: "إجمالي المتاجر",
            value: stores.length,
            icon: ShoppingBag,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
          },
          {
            label: "إجمالي المنتجات",
            value: totalProducts,
            icon: Package,
            color: "text-emerald-500",
            bg: "bg-emerald-500/10",
          },
          {
            label: "الطلبات",
            value: totalOrders,
            icon: ShoppingCart,
            color: "text-violet-500",
            bg: "bg-violet-500/10",
          },
          {
            label: "الإيرادات",
            value: `${totalRevenue.toLocaleString("ar-SA")} ر.س`,
            icon: TrendingUp,
            color: "text-amber-500",
            bg: "bg-amber-500/10",
          },
        ].map((stat) => {
          const SIcon = stat.icon;
          return (
            <Card key={stat.label}>
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={cn("rounded-xl p-2.5", stat.bg)}>
                    <SIcon className={cn("h-5 w-5", stat.color)} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">
                      {stat.label}
                    </p>
                    <p className="font-bold text-xl">
                      {typeof stat.value === "number"
                        ? stat.value.toLocaleString("ar-SA")
                        : stat.value}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="-translate-y-1/2 absolute top-1/2 right-3 h-4 w-4 text-muted-foreground" />
        <Input
          className="pr-10"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="بحث في المتاجر..."
          value={searchTerm}
        />
      </div>

      {/* Store Cards Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredStores.map((store) => {
          const typeInfo = STORE_TYPES[store.store_type] || STORE_TYPES.general;
          const statusInfo = STATUS_MAP[store.status] || STATUS_MAP.draft;
          return (
            <Card
              className="group overflow-hidden transition-all duration-200 hover:scale-[1.01] hover:shadow-lg"
              key={store.id}
            >
              {/* Colored Header Bar */}
              <div
                className={cn(
                  "h-2",
                  store.status === "active"
                    ? "bg-gradient-to-r from-emerald-500 to-green-500"
                    : "bg-gradient-to-r from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700"
                )}
              />
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "rounded-xl border p-2 text-2xl",
                        typeInfo.color
                      )}
                    >
                      {typeInfo.emoji}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{store.name}</CardTitle>
                      <CardDescription className="mt-0.5 flex items-center gap-1.5">
                        <Globe className="h-3 w-3" />
                        {store.slug}.store.app
                      </CardDescription>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        className="h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100"
                        size="icon"
                        variant="ghost"
                      >
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="gap-2">
                        <Eye className="h-4 w-4" /> معاينة
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2">
                        <Edit className="h-4 w-4" /> تحرير
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2">
                        <ExternalLink className="h-4 w-4" /> فتح المتجر
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="gap-2 text-destructive">
                        <Trash2 className="h-4 w-4" /> حذف
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-center gap-2">
                  <Badge
                    className={cn("border", typeInfo.color)}
                    variant="outline"
                  >
                    {typeInfo.emoji} {typeInfo.label}
                  </Badge>
                  <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="rounded-lg bg-muted/50 p-2">
                    <p className="font-bold text-lg">{store.products_count}</p>
                    <p className="text-[10px] text-muted-foreground">منتج</p>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-2">
                    <p className="font-bold text-lg">{store.orders_count}</p>
                    <p className="text-[10px] text-muted-foreground">طلب</p>
                  </div>
                  <div className="rounded-lg bg-muted/50 p-2">
                    <p className="font-bold text-lg">
                      {store.revenue > 0
                        ? `${(store.revenue / 1000).toFixed(1)}K`
                        : "0"}
                    </p>
                    <p className="text-[10px] text-muted-foreground">إيرادات</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}

        {/* Add New Store Card */}
        <Card className="group flex min-h-[240px] cursor-pointer items-center justify-center border-2 border-dashed transition-all hover:border-primary/50 hover:bg-muted/30">
          <div className="p-6 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
              <Plus className="h-6 w-6 text-primary" />
            </div>
            <p className="font-medium">إنشاء متجر جديد</p>
            <p className="mt-1 text-muted-foreground text-xs">
              اختر قالب وابدأ البناء بالذكاء الاصطناعي
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
