import './App.css';
import {Component} from "react";
import Person from "../person/person";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {id: 1, name: 'ФИО-01', phone: '123-45-67', career: 'IT', email: 'ab@cd.ef', meeting: '20.12 - 12:00'},
                {id: 2, name: 'ФИО-02', phone: '234-56-78', career: 'Бухгалтер', email: 'cd@cd.ef', meeting: '21.12 - 13:00'},
                {id: 3, name: 'ФИО-03', phone: '345-67-89', career: 'Кадры', email: 'ef@cd.ef', meeting: ''},
                {id: 4, name: 'ФИО-04', phone: '563-78-90', career: 'Эксперт', email: 'gh@cd.ef', meeting: ''},
            ]
        }
    }


    onValueChange = (id, value) => {
        this.setState(({data}) => {
            const ind = data.find(item => item.id === id)
            const newInd = {...ind, meeting: value}
            const indX = data.indexOf(ind)
            const newData = [...data.slice(0, indX), newInd, ...data.slice(indX + 1, data.length) ]
            return{
                data: newData
            }
        })
    }


    render() {
        const {data} = this.state
        const personList = data.map(item => {
                return <Person {...item} key={item.id} onValueChange={(id, value) => this.onValueChange(id, value)}/>
            })

        return (
            <div className="App">
                <table className="responsive-table">
                    <thead>
                    <tr>
                        <th>Ф И О</th>
                        <th>Телефон</th>
                        <th>Должность</th>
                        <th>E-mail</th>
                        <th>Встреча</th>
                    </tr>
                    </thead>

                    <tbody>
                        {personList}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
