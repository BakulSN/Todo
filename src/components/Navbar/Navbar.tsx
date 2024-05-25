import { SNavbar } from './SNavbar.styles';
import { Filter } from '../../types/enum.modal';

interface NavbarProps {
    showTasks: (filterTasks: Filter) => void;
    filter: Filter;
}

export const Navbar: React.FC<NavbarProps> = ({ showTasks, filter }) => {
    const activeStyle = {
        boxShadow: 'rgb(0 0 0 / 25%) 0px 30px 60px -12px inset, rgb(0 0 0 / 30%) 0px 18px 36px -18px inset',
    };

    return (
        <SNavbar>
            <button style={filter === Filter.All ? activeStyle : {}} onClick={() => showTasks(Filter.All)}>
                All
            </button>
            <button style={filter === Filter.Active ? activeStyle : {}} onClick={() => showTasks(Filter.Active)}>
                Active
            </button>
            <button style={filter === Filter.Completed ? activeStyle : {}} onClick={() => showTasks(Filter.Completed)}>
                Completed
            </button>
        </SNavbar>
    );
};
