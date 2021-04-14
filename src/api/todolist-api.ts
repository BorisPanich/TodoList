import axios, {AxiosResponse} from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd5df1483-fabd-4509-9f07-cc778848b14b'
    }
})

type TodoType = {
    id: string
    addedDate: string
    order: number
    title: string
}
type CommonResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: T
}

export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}
type GetResponseType = {
    items: Array<TaskType>
    totalCount: number
    error: string
}


export const todolistAPI = {
    getTodos(): Promise<AxiosResponse<Array<TodoType>>> {           // это идеально, но не обезательно
        return instance.get<Array<TodoType>>('todo-lists')
    },
    createTodo(title: string) {
        return instance.post<CommonResponseType<{ item: TodoType }>>('todo-lists', {title})
    },
    deleteTodo(todolistId: string) {
        return instance.delete<CommonResponseType>(`todo-lists/${todolistId}`)
    },
    updateTodolist(todolistId: string, title: string) {
        return instance.put<CommonResponseType>(`todo-lists/${todolistId}`, {title})
    },

    // Tasks
    getTasks(todolistId: string) {
        return instance.get<Array<GetResponseType>>('todo-lists/{todolistId}/tasks')
    },
    // createTasks(title: string) {
    //     return instance.post<CommonResponseType<{ item: TodoType }>>('todo-lists', {title})
    // },
    deleteTasks(todolistId: string, taskId: string) {
        return instance.delete<CommonResponseType>(`todo-lists/{todolistId}/tasks/{taskId}`)
    },
    // updateTasks(todolistId: string, title: string) {
    //     return instance.put<CommonResponseType>(`todo-lists/${todolistId}`, {title})
    // },
}



