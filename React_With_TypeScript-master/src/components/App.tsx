import * as React from 'react';

class App extends React.Component<{}, IState>{

    constructor(props: {}){
        super(props);

        this.state = {
            currentTask: "",
            tasks: []
        }
    }


    public handleSubmit(e: React.FormEvent<HTMLFormElement>):void{
        console.log("i am clicked")
        e.preventDefault()
        this.setState({
            currentTask: "",
            tasks:[
                ...this.state.tasks,
                {
                    id: this._thisInMilliSecond(),
                    value : this.state.currentTask,
                    completed: false
                } 
            ]
        })
    }


    public deleteTask(id: number): void{
        const filteredTasks: Array<ITask> = this.state.tasks.filter(
            (task :ITask) => task.id !== id
        );
        this.setState({tasks: filteredTasks})
    }
    
    public toggleDone(index: number): void{
        let task: ITask[] = this.state.tasks.splice(index, 1);
        task[0].completed = !task[0].completed;
        const currentTasks: ITask[] = [...this.state.tasks, ...task];
        this.setState({tasks: currentTasks});

    }

    public renderTask(): JSX.Element[]{
        return this.state.tasks.map((task:ITask, index:number)=>{
            return(
                <div key={task.id} className="tdl-task">
                    <span className={task.completed ? "is-completed": ""}>{task.value}</span>
                    <button onClick= {()=>this.deleteTask(task.id)}>Delete</button>
                    <button onClick={()=>this.toggleDone(index)}>{task.completed ? "undo":"done"}</button>
                </div>
            )
        })
    }

    public render(): JSX.Element{
        console.log(this.state)
        return  (
            <div>
                <h1>React With typeScript</h1>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input type="text" placeholder="Add your task" 
                    className="tdl-input"
                        onChange={(e)=>this.setState({currentTask: e.target.value})}/>
                    <button type="submit">Add Task</button>
                </form>
                <section>{this.renderTask()}</section>
            </div>  
        );
    }
    private _thisInMilliSecond(): number{
        const date: Date = new Date();
        return date.getTime()
    }
}

export default App;


interface IState{
    currentTask: string,
    tasks: Array<ITask>;
}

interface ITask{
    id: number,
    value: string,
    completed: boolean
}