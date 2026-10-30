import ProjectButtons from '../buttons/ProjectButtons';

interface GoalButtonsProps {
  goalText: string;
  onEdit: () => void;
  onDelete: () => void;
}

export function GoalButtons({ goalText, onEdit, onDelete }: GoalButtonsProps) {
  return (
    <div
      role='group'
      aria-label='Goal actions'
      className='flex flex-row'
    >
      <ProjectButtons
        Text='Edit'
        Icon='edit'
        AriaLabel={`Edit goal: ${goalText}`}
        onClick={onEdit}
      />
      <ProjectButtons
        Text='Delete'
        Icon='delete'
        AriaLabel={`Delete goal: ${goalText}`}
        onClick={onDelete}
      />
    </div>
  );
}
