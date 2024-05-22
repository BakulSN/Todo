import { SNavbar } from './SNavbar.styles';

interface NavbarProps {
    showAllTasks: () => void;
    showActiveTasks: () => void;
    showCompletedTasks: () => void;
    filter: string;
}

export const Navbar: React.FC<NavbarProps> = ({ showAllTasks, showActiveTasks, showCompletedTasks, filter }) => {
    const activeStyle = {
        boxShadow: 'rgb(0 0 0 / 25%) 0px 30px 60px -12px inset, rgb(0 0 0 / 30%) 0px 18px 36px -18px inset',
    };

    return (
        <SNavbar>
            <button style={filter === 'all' ? activeStyle : {}} onClick={showAllTasks}>
                All
            </button>
            <button style={filter === 'active' ? activeStyle : {}} onClick={showActiveTasks}>
                Active
            </button>
            <button style={filter === 'completed' ? activeStyle : {}} onClick={showCompletedTasks}>
                Completed
            </button>
        </SNavbar>
    );
};
