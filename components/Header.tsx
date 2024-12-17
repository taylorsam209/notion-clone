'use client'

import { SignedOut, useUser, SignInButton, SignedIn, UserButton } from "@clerk/nextjs"

const Header = () => {
  const { user } = useUser()

  return (
    <div className="flex items-center justify-between p-5">
      {user && (
        <h1 className="text-2xl">{`${user?.firstName}'s Space`}
        </h1>
      )}

      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  )
}

export default Header