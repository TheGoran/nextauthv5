
//Auth  routes layout
//Extracting the children and the type React.ReactNode

const AuthLayout = ({ 
    children 
}: { 
    children: React.ReactNode
}) => {
    return (
        <div className="h-full flex items-center justify-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-600 to-gray-900">
            {children}
        </div>
    );
}

export default AuthLayout;