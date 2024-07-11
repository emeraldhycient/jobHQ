import { Button } from '@/components/ui/button';
import { FC } from 'react';

interface Course {
    id: number;
    title: string;
    modulesCompleted: number;
    totalModules: number;
    category: string;
}

interface LearningProgressProps {
    courses: Course[];
}

const LearningProgress: FC<LearningProgressProps> = ({ courses }) => {
    return (
        <div className="p-4 bg-gray-700 rounded">
            <h2 className="text-xl font-bold mb-4">Learning Progress</h2>
            <ul>
                {courses.map((course) => (
                    <li key={course.id} className="mb-2">
                        <div className="flex justify-between">
                            <div>
                                <h3 className="font-bold">{course.title}</h3>
                                <p>Modules Completed: {course.modulesCompleted} of {course.totalModules}</p>
                                <p>{course.category}</p>
                            </div>
                            <Button variant={'lucentblue'} size={'sm'}>Resume learning</Button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LearningProgress;
