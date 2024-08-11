import prisma from "../db.js";
export const getOneBoard = async (req, res) => {
    try {
        if (req.params.boardId) {
            const board = await prisma.board.findUnique({
                where: { id: req.params.boardId },
                include: {
                    columns: {
                        include: {
                            tasks: {
                                include: {
                                    subtasks: true,
                                },
                            },
                        },
                    },
                },
            });
            if (!board) {
                return res.status(404).json({ error: 'Board not found' });
            }
            else {
                res.json({ data: board });
            }
        }
        else {
            return res.status(404).json({ error: 'Need an id' });
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
export const getBoards = async (req, res) => {
    try {
        if (!res.locals.session) {
            res.status(500).json({ error: 'Not auth' });
        }
        if (!res.locals.session?.user?.id) {
            res.status(500).json({ error: 'Not id ' });
        }
        const boards = await prisma.user.findMany({
            where: {
                id: res.locals.session?.user?.id
            },
            select: {
                // Include or exclude the fields you need
                id: true,
                name: true,
                email: true,
                boards: {
                    select: {
                        id: true,
                        name: true,
                        columns: {
                            select: {
                                id: true,
                                name: true,
                                tasks: {
                                    select: {
                                        id: true,
                                        title: true,
                                        subtasks: true,
                                        description: true,
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
        res.json(boards);
    }
    catch (error) {
        // Handle the error accordingly
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching the boards' });
    }
};
export const createboard = async (req, res) => {
    try {
        // Assuming user and product IDs are provided in the request body
        const { name, columns } = req.body;
        if (!res.locals.session) {
            res.status(500).json({ error: 'Not auth' });
        }
        if (!res.locals.session?.user?.id) {
            res.status(500).json({ error: 'Not id ' });
        }
        const newBoard = await prisma.board.create({
            data: {
                name: name,
                user: {
                    connect: { id: res.locals.session?.user?.id },
                },
                columns: {
                    create: columns.map((colName) => ({ name: colName })),
                },
            },
            include: {
                columns: true,
            },
        });
        res.json({ newBoard });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
export const updateboard = async (req, res) => {
    if (!res.locals.session) {
        res.status(500).json({ error: 'Not auth' });
    }
    if (!res.locals.session?.user?.id) {
        res.status(500).json({ error: 'Not id ' });
    }
    try {
        if (req.params.id) {
            console.log(req.params.id);
            const board = await prisma.board.findUnique({
                where: {
                    id: res.locals.session?.user?.id
                }
            });
            if (!board) {
                return res.status(404).json({ error: 'Board not found' });
            }
            else {
                const updatedUpdate = await prisma.board.update({
                    where: { id: req.params.id },
                    data: req.body,
                    include: {
                        columns: {
                            include: {
                                tasks: {
                                    include: {
                                        subtasks: true,
                                    },
                                },
                            },
                        },
                    },
                });
                res.json({ data: updatedUpdate });
            }
        }
        else {
            return res.status(404).json({ error: 'Need an id' });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
export const deleteboard = async (req, res) => {
    try {
        const deleted = await prisma.board.delete({
            where: {
                id: req.params.boardId
            }
        });
        res.json({ data: deleted });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete the board' });
    }
};
//# sourceMappingURL=boards.js.map