import { Checkbox, Chip, cn, Link, User } from '@nextui-org/react';

export const CustomCheckbox = ({
  user,
  statusColor,
  value,
}: {
  user: {
    name: string;
    url: string;
    username: string;
    role: string;
    status: string;
  };
  statusColor:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger'
    | undefined;
  value: string;
}) => {
  return (
    <Checkbox
      aria-label={user.name}
      classNames={{
        base: cn(
          'inline-flex max-w-md w-full bg-content1 m-0',
          'hover:bg-content2 items-center justify-start',
          'cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent',
          'data-[selected=true]:border-primary'
        ),
        label: 'w-full',
      }}
      value={value}
    >
      <div className='w-full flex justify-between gap-2'>
        <User
          description={
            <Link isExternal href={user.url} size='sm'>
              @{user.username}
            </Link>
          }
          name={user.name}
          avatarProps={{
            className: 'hidden',
          }}
        />
        <div className='flex flex-col items-end gap-1'>
          <span className='text-tiny text-default-500'>{user.role}</span>
          <Chip color={statusColor} size='sm' variant='flat'>
            {user.status}
          </Chip>
        </div>
      </div>
    </Checkbox>
  );
};
