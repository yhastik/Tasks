import './app.css'
import { useForm } from 'react-hook-form'
import { Card } from './components/card';
function App() {
  const {register, handleSubmit, formState: { errors }} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="app">
      <div className='forms'>
        <h1 className='h1'>Задача</h1>
        <form  className="form" onSubmit={handleSubmit(onSubmit)}>


          <div className="form-mew">
            <label>Название задачи<span className='red'>*</span></label>
            <input type="text" className="mew"{...register("mew", { required: true })}/>
            {errors.mew && <span className="error">Вы не заполнили название задачи</span>}
          </div>

          <div className="form-name">
            <label>Описание</label>
            <input type="text" className="name"{...register("name", { required: true })}/>
          </div>
  
  
          <div className=''>
            <button type="submit" className='submit'>Отправить</button>
          </div>
  
  
        </form>


        <div className='group'>
            <h2>Группа:</h2>
            <ul>
              <li>Лулич Ясмина</li>
              <li>Шпак Егор</li>
              <li>Волкова Алиса</li>
              <li>Шатрова Анна</li>
              <li>Машараева Карина</li>
              <li>Усольцева Ксения</li>
              <li>Криворотов Иван</li>
              <li>Козуб Андрей</li>
            </ul>
        </div>
      </div>







      <div className="tasks">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        
      </div>
        
 
    </div>
  );
}

export default App;
