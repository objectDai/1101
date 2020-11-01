import React, { useState } from "react";
// import styles from '../carouselStyle/index.css';
export default () => {
  let [top, setTop] = useState(10);

  let users = [
    { id: "本地生活-业务专员-北京", name: "北京", age: "15分钟前" },
    { id: "渠道经理-渠道经理", name: "江西", age: "2小时前" },
    {
      id: "蚂蚁集团-业务发展专员-华东区（支付宝）",
      name: "上海",
      age: "1分钟前",
    },
    { id: "阿里云智能事业群多端应用", name: "杭州", age: "3分钟前" },
    { id: "阿里文娱优酷-品牌传媒", name: "北京", age: "1小时前" },
    {
      id: "阿里集团景区业务专员（政府方向）-支付宝",
      name: "重庆",
      age: "10分钟前",
    },
    { id: "阿里影业-高级法务专员-电商平台", name: "杭州", age: "8分钟前" },
    { id: "本地生活-业务专员-北京", name: "北京", age: "15分钟前" },
    { id: "渠道经理-渠道经理", name: "江西", age: "2小时前" },
    {
      id: "蚂蚁集团-业务发展专员-华东区（支付宝）",
      name: "上海",
      age: "1分钟前",
    },
    { id: "阿里云智能事业群多端应用", name: "杭州", age: "3分钟前" },
    { id: "阿里文娱优酷-品牌传媒", name: "北京", age: "1小时前" },
    {
      id: "阿里集团景区业务专员（政府方向）-支付宝",
      name: "重庆",
      age: "10分钟前",
    },
    { id: "阿里影业-高级法务专员-电商平台", name: "杭州", age: "8分钟前" },
    { id: "本地生活-业务专员-北京", name: "北京", age: "15分钟前" },
    { id: "渠道经理-渠道经理", name: "江西", age: "2小时前" },
    {
      id: "蚂蚁集团-业务发展专员-华东区（支付宝）",
      name: "上海",
      age: "1分钟前",
    },
    { id: "阿里云智能事业群多端应用", name: "杭州", age: "3分钟前" },
    { id: "阿里文娱优酷-品牌传媒", name: "北京", age: "1小时前" },
    {
      id: "阿里集团景区业务专员（政府方向）-支付宝",
      name: "重庆",
      age: "10分钟前",
    },
    { id: "阿里影业-高级法务专员-电商平台", name: "杭州", age: "8分钟前" },
    { id: "本地生活-业务专员-北京", name: "北京", age: "15分钟前" },
    { id: "渠道经理-渠道经理", name: "江西", age: "2小时前" },
    {
      id: "蚂蚁集团-业务发展专员-华东区（支付宝）",
      name: "上海",
      age: "1分钟前",
    },
    { id: "阿里云智能事业群多端应用", name: "杭州", age: "3分钟前" },
    { id: "阿里文娱优酷-品牌传媒", name: "北京", age: "1小时前" },
    {
      id: "阿里集团景区业务专员（政府方向）-支付宝",
      name: "重庆",
      age: "10分钟前",
    },
    { id: "阿里影业-高级法务专员-电商平台", name: "杭州", age: "8分钟前" },
  ];
  let [list, setList] = useState(users);

  let timer = setInterval(movement, 10);
  function movement() {
    if (Math.abs(top) > 30 * users.length - 150) {
      top = 10;
      setList(users);
    }
    setTop(top - 0.3);
    clearInterval(timer);
  }
  function stop() {
    clearInterval(timer);
  }
  const joblist = {
    margin: " 20px 100px",
    width: "60%",
    boxShadow: " 5px 5px 8px #888888",
  };
  const NewJob = {
    height: " 210px",
    overflow: "hidden",
  };
  const li = {
    listStyle: " none",
    height: "30px",
    width: "100%",
  };
  return (
    <div style={joblist}>
      <p
        style={{
          height: " 30px",
          lineHeight: "30px",
          borderBottom: "1px solid #bdbdbd",
          margin: 0,
        }}
      >
        <span style={{ fontSize: "14px", color: "#888888", marginLeft: "5px" }}>
          最新职位
        </span>
        <a
          href="#"
          style={{
            float: " right",
            marginRight: "20px",
            textDecoration: " none",
            color: "#888888",
            fontSize: "14px",
          }}
        >
          更多
        </a>
      </p>

      <div style={NewJob}>
        <ul
          style={{ marginTop: top, height: "210px", padding: "0" }}
          onMouseEnter={stop}
          onMouseLeave={movement}
        >
          {list.map((item, index) => {
            return (
              <li key={index} style={li}>
                <span
                  style={{
                    display: " inline-block",

                    height: "20px",
                    margin: "0 5px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    fontSize: "12px",
                    color: "#7db5ff",
                    width: "50%",
                  }}
                >
                  {item.id}
                </span>
                <span
                  style={{
                    display: " inline-block",
                    width: " 20%",
                    height: "20px",
                    margin: "0 5px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    fontSize: "12px",
                    color: "#3f3f3f",
                  }}
                >
                  {item.name}
                </span>
                <span
                  style={{
                    display: " inline-block",
                    width: " 20%",
                    height: "20px",
                    margin: "0 5px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    fontSize: "12px",
                    float: "right",
                    textAlign: "right",
                    color: "#5a5a5a",
                  }}
                >
                  {item.age}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
