import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PageHeader } from '@/components/page-header';
import { DataTable } from '@/components/data-table';
import { mockStudents, mockTeachers } from '@/lib/mock-data';
import { columns } from './columns';

export default function DashboardPage() {
  const allUsers = [...mockStudents, ...mockTeachers];

  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title="Dashboard"
        description="Kelola data siswa dan guru sekolah Anda."
      >
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Tambah Data
        </Button>
      </PageHeader>
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">Semua Data</TabsTrigger>
          <TabsTrigger value="students">Siswa</TabsTrigger>
          <TabsTrigger value="teachers">Guru</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Semua Data Pengguna</CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable columns={columns} data={allUsers} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="students" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Data Siswa</CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable columns={columns} data={mockStudents} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="teachers" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Data Guru</CardTitle>
            </CardHeader>
            <CardContent>
              <DataTable columns={columns} data={mockTeachers} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
