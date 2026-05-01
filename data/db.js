module.exports = {
  employees: [
    {
      id: 1,
      name: "Juan Dela Cruz",
      position: "HR Manager",
      department: "Human Resources",
      email: "juan.delacruz@email.com"
    },
    {
      id: 2,
      name: "Maria Santos",
      position: "Software Developer",
      department: "IT",
      email: "maria.santos@email.com"
    }
  ],

  workflows: [
    {
      id: 101,
      title: "Employee Onboarding",
      description: "Process for new hires",
      status: "Pending"
    },
    {
      id: 102,
      title: "Leave Approval",
      description: "Approve employee leave requests",
      status: "Pending"
    }
  ],

  tasks: [
    {
      id: 201,
      title: "Submit Documents",
      assignedTo: 1,
      workflowId: 101,
      status: "Pending"
    },
    {
      id: 202,
      title: "Setup Workstation",
      assignedTo: 2,
      workflowId: 101,
      status: "Pending"
    }
  ],

  approvals: [
    {
      id: 301,
      taskId: 201,
      approvedBy: "HR Manager",
      status: "Approved"
    },
    {
      id: 302,
      taskId: 202,
      approvedBy: "IT Head",
      status: "Pending"
    }
  ],

  logs: [
    {
      id: 401,
      action: "Created Employee",
      performedBy: "Admin",
      date: "2026-05-01"
    },
    {
      id: 402,
      action: "Workflow Created",
      performedBy: "HR Manager",
      date: "2026-05-01"
    }
  ]
};