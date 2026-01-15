import PublicNavbar from "@/components/shared/PublicNavbar";

const CommonLayout = ({ children } : { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col bg-muted/30">  
            <PublicNavbar/>
            <main className="container mx-auto grow max-w-7xl">
                {children}
            </main>
        </div>
    );
};

export default CommonLayout;