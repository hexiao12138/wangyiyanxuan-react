import React,{useCallback} from 'react';
import './index.less';
export default function User ({history}) {


  const goBack = useCallback(
    () => {
      history.goBack()
    },
    [history]
  )
  return (
    <div className='user'>
      <header>
        <i onClick={goBack} className='iconfont iconhome'></i>
        <span>网易严选</span>
        <div className="right">
          <i className='iconfont iconsousuo'></i>
          <i className='iconfont iconicon'></i>
        </div>
      </header>
      <section>
        <div className="con">
          网易严选
        </div>
        <div className="login">
          <button >
          <i className='iconfont iconshouji'></i>
           手机号快捷登录
          </button>
          <button>
          <i className='iconfont iconyouxiang'></i>
            邮箱账号登录
          </button>
        </div>
      </section>
      <section>

      </section>
      <section> 

      </section>
    </div>
  )
}