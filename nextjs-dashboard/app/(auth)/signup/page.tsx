import { fetchUser } from '@/app/lib/data';
import SignUpForm from '../../components/form/SignUpForm';
// import Breadcrumbs from '../../components/ui/auth/breadcrumbs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회원가입',
};

export default async function Page() {
  // const user = await fetchUser();

  return (
    <div className='w-full'>
      {/* <SignUpForm user={user}/> */}
      <SignUpForm />
    </div>
  );
}