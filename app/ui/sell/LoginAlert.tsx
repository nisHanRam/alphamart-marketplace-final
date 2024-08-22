import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export function LoginAlert({ onOpenChange }: { onOpenChange: () => void }) {
  return (
    <div
      className="bg-black/50 absolute inset-0 grid place-items-center"
      onClick={onOpenChange}
    >
      <div className="bg-canvas border border-blue-50/10 text-blue-50 flex flex-col p-4 rounded gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="h5">Please login to continue</h1>
          <p className="p text-blue-50/75">
            You need to be logged in to create and sell assets. Please log in to
            continue.
          </p>
        </div>
        <LoginLink className="btn bg-blue-50/10 self-end">Login</LoginLink>
      </div>
    </div>
  );
}
