import React from 'react'


export const AuthPage = () => {
    return (
        <div className='row'>
          <div className='col s6 offset-s3'>
            <h1>Придумать название</h1>
              <div className="card blue lighten-1">
                <div className="card-content black-text">
                  <span className="card-title white-text">Авторизация</span>
                  <div>

                    <div className='input-field'>
                      <input
                      placeholder='Введите ваш email'
                      id = "email"
                      type="text"
                      name = "email"
                      className='red-input'
                      />
                      <label htmlFor='email'>Email</label>
                    </div>
                    <div className='input-field'>
                      <input
                      placeholder='Give me your password'
                      id = "password"
                      type="password"
                      name='password'
                      className='red-input'
                      />
                      <label htmlFor='password'>Пароль</label>
                    </div>
                  
                  </div>
                <div className='card-action'>
                  <button className='btn green darken-1' style={{marginRight: 10}}>Войти</button>
                  <button className='btn grey lighten-1 black-text'>Регистрация</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}