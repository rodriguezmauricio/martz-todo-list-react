import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

//import components
import Header from "./components/header/Header";
import ListForm from "./components/listForm/ListForm";
import ListItem from "./components/listItem/ListItem";
import SideMenu from "./components/sideMenu/SideMenu";
import EditTaskForm from "./components/editTaskForm/EditTaskForm";

export interface Item {
	id: string;
	task: string;
}

interface TaskList {
	id: string;
	task: string;
	completed: boolean;
}

function App() {
	// lista de tarefas
	const [taskList, setTaskList] = useState<TaskList[]>([]);

	// tarefa individual que é inserida pelo form de adicionar tarefa
	const [task, setTask] = useState("");

	// filtros "All tasks", "completed" e "incomplete" iniciado com all selecionado
	const [filter, setFilter] = useState<string>("all");

	// Faz o carregamento da lista quando o app abre
	useEffect(() => {
		const storage = localStorage.getItem("taskListStorage");
		if (storage) {
			setTaskList(JSON.parse(storage));
		}
	}, []);

	// adicionar tarefa na lista
	const handleAddTask = (e: React.FormEvent) => {
		e.preventDefault();
		if (task) {
			const newTask = {
				id: String(Math.random() * 100),
				task,
				completed: false,
			};

			setTask("");
			setTaskList([...taskList, newTask]);
			localStorage.setItem("taskListStorage", JSON.stringify([...taskList, newTask]));
		}
	};

	//remover tarefas da lista
	const handleRemove = (itemId: string) => {
		setTaskList(taskList.filter((item: TaskList) => item.id !== itemId));
		localStorage.setItem(
			"taskListStorage",
			JSON.stringify(taskList.filter((item: TaskList) => item.id !== itemId))
		);
	};

	//marca um item da lista como completo
	const handleChecked = (id: string) => {
		const novaLista = taskList.map((obj: TaskList) => {
			if (obj.id === id) {
				if (obj.completed === false) {
					return { ...obj, completed: true };
				} else if (obj.completed === true) {
					return { ...obj, completed: false };
				}
			}
			return obj;
		});

		setTaskList(novaLista);
		localStorage.setItem("taskListStorage", JSON.stringify(novaLista));
	};

	//editar o item da lista
	const [editTaskForm, setEditTaskForm] = useState({ id: "", task: "" });

	// adiciona a tarefa no componente para editar
	const handleEditButton = (id: string, task: string) => {
		setEditTaskForm({ id, task });
	};

	//confirma e salva a tarefa editada no mesmo lugar na lista
	const handleSubmitTaskForm = (e: React.FormEvent, id: string, alteredTask: string) => {
		e.preventDefault();

		const newList = taskList.map((obj: TaskList) => {
			const newObj = { ...obj, task: alteredTask };
			if (obj.id === id) {
				return newObj;
				// console.log(obj.id, id);
			}
			return obj;
		});
		setTaskList(newList);
		localStorage.setItem("taskListStorage", JSON.stringify(newList));

		setEditTaskForm({ id, task });
	};

	//define a largura da tela pra renderização condicional em responsividade

	const isDesktop = useMediaQuery({ minWidth: 900 });

	return (
		<main className="main-container">
			{isDesktop ? (
				<div className="left">
					<SideMenu filter={filter} setFilter={setFilter} />
				</div>
			) : null}

			<div className="right">
				<Header taskList={taskList} />
				{/* <ListForm task={task} setTask={setTask} handleAddTask={handleAddTask} /> */}

				{editTaskForm.task !== "" ? (
					<EditTaskForm
						handleSubmitTaskForm={handleSubmitTaskForm}
						editTaskForm={editTaskForm}
						setEditTaskForm={setEditTaskForm}
					/>
				) : (
					<ListForm task={task} setTask={setTask} handleAddTask={handleAddTask} />
				)}

				<div className="divider align-center"></div>

				<div className="list">
					{taskList
						.filter((item: { id: string; task: string; completed: boolean }) => {
							if (filter === "all") {
								return item;
							}

							if (filter === "completed") {
								return item.completed === true;
							}

							if (filter === "incomplete") {
								return item.completed === false;
							}
						})
						.map((item: TaskList) => {
							if (item) {
								return (
									<ListItem
										classname={
											item.completed === false
												? "list-content"
												: "list-is-checked"
										}
										item={item}
										key={item.id}
										handleChecked={handleChecked}
										handleRemove={handleRemove}
										handleEditButton={handleEditButton}
										// editTaskForm={editTaskForm}
										// setEditTaskForm={setEditTaskForm}
										// handleSubmitTaskForm={handleSubmitTaskForm}
									/>
								);
							}
						})}
				</div>
			</div>
		</main>
	);
}

export default App;
