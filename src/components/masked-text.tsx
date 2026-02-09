'use client';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const SUPERADMIN_CODE = 'eduvault2024';

interface MaskedTextProps {
  text: string;
}

export function MaskedText({ text }: MaskedTextProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [code, setCode] = useState('');
  const { toast } = useToast();

  const handleRevealClick = () => {
    if (isRevealed) {
      setIsRevealed(false);
    } else {
      setIsModalOpen(true);
    }
  };

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (code === SUPERADMIN_CODE) {
      setIsRevealed(true);
      setIsModalOpen(false);
      setCode('');
      toast({
        title: 'Sukses',
        description: 'Data sensitif berhasil ditampilkan.',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Gagal',
        description: 'Kode Super Admin salah.',
      });
    }
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <span className="font-mono">
          {isRevealed ? text : '****************'}
        </span>
        <Button
          variant="ghost"
          size="icon"
          className="h-7 w-7"
          onClick={handleRevealClick}
        >
          {isRevealed ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
          <span className="sr-only">
            {isRevealed ? 'Sembunyikan' : 'Tampilkan'} data
          </span>
        </Button>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleVerifyCode}>
            <DialogHeader>
              <DialogTitle>Akses Terbatas</DialogTitle>
              <DialogDescription>
                Masukkan kode Super Admin untuk melihat data sensitif ini.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="superadmin-code" className="text-right">
                  Kode
                </Label>
                <Input
                  id="superadmin-code"
                  type="password"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="col-span-3"
                  autoFocus
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Verifikasi</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
