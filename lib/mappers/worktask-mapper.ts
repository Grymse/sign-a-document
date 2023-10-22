interface Checklist {
  type: string;
  severity: number;
}

interface Worktask {
  type: string;
  hours: number;
}

const checklistToWorktask = {
  type1: [1, 2, 3],
  type2: [2, 4, 6],
  type3: [3, 6, 9],
};

function mapChecklistsToWorktasks(checklists: Checklist[]): Worktask[] {
  const worktasks: Worktask[] = [];

  checklists.forEach((checklist) => {
    const hours = checklistToWorktask[checklist.type][checklist.severity - 1];
    const worktask: Worktask = {
      type: checklist.type,
      hours: hours,
    };
    worktasks.push(worktask);
  });

  return worktasks;
}
