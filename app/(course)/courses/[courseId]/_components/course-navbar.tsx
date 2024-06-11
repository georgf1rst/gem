import { NavbarRoutes } from "@/components/navbar-routes";
import { Course } from "@prisma/client"

interface CourseNavbarProps {
    course: Course & {
        chapters: (Chapter & {
            userProgerss: UserProgress[] | null;
        })[];
    };
    progressCount: number;
};


export const CourseNavbar = ({
    course,
    progressCount,
}: CourseNavbarProps) => {
    return (
        <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
            <NavbarRoutes/>
        </div>
    )
}