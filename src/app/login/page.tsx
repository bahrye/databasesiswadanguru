import Link from 'next/link';
import { Building, LogIn } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-primary p-3 text-primary-foreground">
              <Building className="h-8 w-8" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">EduVault</CardTitle>
          <CardDescription>
            Selamat datang! Silakan masuk ke akun Anda.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@sekolah.id"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <Link href="/" className="block w-full">
              <Button className="w-full">
                <LogIn className="mr-2 h-4 w-4" />
                Masuk
              </Button>
            </Link>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
