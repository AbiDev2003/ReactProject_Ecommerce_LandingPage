import UserDetailCard from './UserDetailCard.jsx';
function UserDetailCardSection({email, userName}) {
  return (
    <div className="bg-gray-600 py-12">
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto'>
            {/* Userdetail section which is wrapped in a tailwind grid css */}
            <UserDetailCard
                    title = "Change email"
                    text= {`You will send a verification email to ${email}`}
                />
                <UserDetailCard
                    title = "Change billing"
                    text= {`You can store upto 5 credit cards on your account`}
                />
                <UserDetailCard
                    title = "Change password"
                    text= {`Keep your phone handy we will send an SMS`}
                />
                <UserDetailCard
                    title = "Request refund"
                    text= {`Don't worry ${userName}, we offer a 14 day money back guarentee. `}
                />
        </div>
    </div>
  )
}

export default UserDetailCardSection