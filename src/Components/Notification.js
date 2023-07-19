const Notification = ({ notification }) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <div>
      {notification === ""
        ? null
        : <div className="notification" style={style}>{notification}</div>
      }
    </div>
  )
}

export default Notification