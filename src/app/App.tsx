import { NextUIProvider } from '@nextui-org/react';
import classNames from './App.module.scss';
import { UserList } from './components/userlist/UserList';
import { UserRegistrationForm } from './components/userregistrationform/UserRegistrationForm';

export default function App() {
  return (
    <NextUIProvider>
      <main className={classNames.main}>
        <UserRegistrationForm />
        <div className={classNames.verticalDivider}></div>
        <UserList />
      </main>
    </NextUIProvider>
  );
}
