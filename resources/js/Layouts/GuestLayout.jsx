import ApplicationLogo from '@/Components/ApplicationLogo';
import Footer from '@/Components/Footer';
import NavigationBar from '@/Components/NavigationBar';
import { Link } from '@inertiajs/react';

export default function Guest({ children, auth }) {
    return (
        <div className="relative max-w-[1600px] mx-auto min-h-screen flex flex-col justify-between items-center bg-gray-100">
            <NavigationBar marginX="px-4 lg:px-10 xl:px-28" auth={auth}/>

            <div className="w-full sm:max-w-md px-6 py-10  bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
            <Footer marginX="px-4 lg:px-10 xl:px-28"/>
        </div>
    );
}
