"use client";

import {
  Bot,
  Edit,
  Eye,
  Filter,
  MoreVertical,
  Plus,
  Search,
  Trash2,
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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Agent {
  id: string;
  name: string;
  description: string | null;
  category: string | null;
  status: "draft" | "published" | "active" | "suspended";
  usageCount: number | null;
  rating: number | null;
  createdAt: string;
  source: string | null;
}

export function AgentsManagement() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await fetch("/admin/api/agents");
        if (response.ok) {
          const data = await response.json();
          setAgents(data.agents || []);
        } else if (response.status === 401 || response.status === 403) {
          console.error("Unauthorized access to admin API");
          setAgents([]);
        }
      } catch (error) {
        console.error("Failed to fetch agents:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  const filteredAgents = agents.filter((agent) => {
    const matchesSearch =
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (agent.description || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || agent.status === statusFilter;
    const matchesCategory =
      categoryFilter === "all" || agent.category === categoryFilter;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const getStatusBadge = (status: string) => {
    const variants: Record<
      string,
      "default" | "secondary" | "destructive" | "outline"
    > = {
      published: "default",
      active: "default",
      draft: "secondary",
      suspended: "destructive",
    };
    const labels: Record<string, string> = {
      published: "منشور",
      active: "نشط",
      draft: "مسودة",
      suspended: "معلق",
    };
    return (
      <Badge variant={variants[status] || "secondary"}>
        {labels[status] || status}
      </Badge>
    );
  };

  const getCategoryBadge = (category: string | null) => {
    const labels: Record<string, string> = {
      assistant: "مساعد",
      coding: "برمجة",
      creative: "إبداعي",
    };
    return (
      <Badge variant="outline">
        {labels[category || ""] || category || "غير محدد"}
      </Badge>
    );
  };

  if (loading) {
    return (
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <Skeleton className="mb-4 h-8 w-48" />
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton className="h-12 w-full" key={i} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-bold text-3xl tracking-tight">إدارة الوكلاء</h2>
          <p className="text-muted-foreground">إدارة جميع الوكلاء في النظام</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          إضافة وكيل جديد
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>قائمة الوكلاء</CardTitle>
          <CardDescription>{filteredAgents.length} وكيل موجود</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute top-2.5 right-2 h-4 w-4 text-muted-foreground" />
              <Input
                className="pr-8"
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="بحث عن وكيل..."
                value={searchTerm}
              />
            </div>
            <Select onValueChange={setStatusFilter} value={statusFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="حالة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع الحالات</SelectItem>
                <SelectItem value="published">منشور</SelectItem>
                <SelectItem value="active">نشط</SelectItem>
                <SelectItem value="draft">مسودة</SelectItem>
                <SelectItem value="suspended">معلق</SelectItem>
              </SelectContent>
            </Select>
            <Select onValueChange={setCategoryFilter} value={categoryFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="تصنيف" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">جميع التصنيفات</SelectItem>
                <SelectItem value="assistant">مساعد</SelectItem>
                <SelectItem value="coding">برمجة</SelectItem>
                <SelectItem value="creative">إبداعي</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>الاسم</TableHead>
                  <TableHead>التصنيف</TableHead>
                  <TableHead>الحالة</TableHead>
                  <TableHead>الاستخدام</TableHead>
                  <TableHead>التقييم</TableHead>
                  <TableHead>المصدر</TableHead>
                  <TableHead className="text-left">الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredAgents.length === 0 ? (
                  <TableRow>
                    <TableCell
                      className="py-8 text-center text-muted-foreground"
                      colSpan={7}
                    >
                      لا توجد وكلاء
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredAgents.map((agent) => (
                    <TableRow key={agent.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <Bot className="h-4 w-4 text-muted-foreground" />
                          {agent.name}
                        </div>
                      </TableCell>
                      <TableCell>{getCategoryBadge(agent.category)}</TableCell>
                      <TableCell>{getStatusBadge(agent.status)}</TableCell>
                      <TableCell>
                        {agent.usageCount?.toLocaleString() || 0}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <span>{agent.rating?.toFixed(1) || "N/A"}</span>
                          <span className="text-yellow-500">★</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {agent.source || "mubasat"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button className="h-8 w-8 p-0" variant="ghost">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>الإجراءات</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              عرض
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              تعديل
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              <Trash2 className="mr-2 h-4 w-4" />
                              حذف
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
