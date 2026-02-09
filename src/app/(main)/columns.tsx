'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MaskedText } from '@/components/masked-text';
import type { AnyUser } from '@/lib/types';
import { MoreHorizontal, Pencil, Trash } from 'lucide-react';

type ColumnDef<TData> = {
  accessorKey: keyof TData | 'actions';
  header: React.ReactNode | (({ column }: { column: any }) => React.ReactNode);
  cell: ({ row }: { row: { original: TData } }) => React.ReactNode;
};

export const columns: ColumnDef<AnyUser>[] = [
  {
    accessorKey: 'name',
    header: 'Nama',
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={row.original.avatarUrl} alt={row.original.name} />
          <AvatarFallback>
            {row.original.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-medium">{row.original.name}</span>
          <span className="text-sm text-muted-foreground">
            {row.original.email}
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'nik',
    header: 'NIK',
    cell: ({ row }) => <MaskedText text={row.original.nik} />,
  },
  {
    accessorKey: 'gender',
    header: 'Jenis Kelamin',
    cell: ({ row }) => <span>{row.original.gender}</span>,
  },
  {
    accessorKey: 'type',
    header: 'Status',
    cell: ({ row }) => {
      const variant =
        row.original.type === 'student' ? 'secondary' : 'default';
      const text = row.original.type === 'student' ? 'Siswa' : 'Guru';
      return <Badge variant={variant}>{text}</Badge>;
    },
  },
  {
    accessorKey: 'details',
    header: 'Detail',
    cell: ({ row }) => {
      if (row.original.type === 'student') {
        return (
          <div>
            <div className="font-medium">{row.original.nisn}</div>
            <div className="text-sm text-muted-foreground">
              Kelas {row.original.grade}
            </div>
          </div>
        );
      }
      return (
        <div>
          <div className="font-medium">{row.original.nip}</div>
          <div className="text-sm text-muted-foreground">
            {row.original.subject}
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: 'actions',
    header: () => <div className="text-right">Aksi</div>,
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className="text-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Buka menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Aksi</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(user.id)}
              >
                Salin ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Pencil className="mr-2 h-4 w-4" />
                Ubah
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive">
                <Trash className="mr-2 h-4 w-4" />
                Hapus
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
