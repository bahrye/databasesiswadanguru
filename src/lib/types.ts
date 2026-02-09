export type User = {
  id: string;
  nik: string;
  name: string;
  email: string;
  gender: 'Laki-laki' | 'Perempuan';
  schoolId: string;
  avatarUrl: string;
  type: 'student' | 'teacher';
};

export type Student = User & {
  type: 'student';
  nisn: string;
  grade: string;
};

export type Teacher = User & {
  type: 'teacher';
  nip: string;
  subject: string;
};

export type AnyUser = Student | Teacher;
