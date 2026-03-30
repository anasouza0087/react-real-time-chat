export const MessagesList = (props) => {
  const { messages } = props

  const emptyListOfMessages = () => {
    return (
      <div
        className="w-full  flex flex-col justify-between items-center"
        style={{ marginTop: 200 }}
      >
        <h1 className="font-bold text-gray-400">Nenhuma mensagem ainda</h1>
        <p className="font-light text-gray-500">
          Seja o primeiro a enviar uma mensagem!
        </p>
      </div>
    )
  }

  return (
    <>
      {messages?.length == 0 ? emptyListOfMessages() : <>lista de mensagens</>}
    </>
  )
}
