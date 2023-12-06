import React, { useState, useEffect } from "react";
import {
  BoxChatMensage,
  BoxContentMensage,
  ButtonMensage,
  ContentChat,
  ContentInput,
  ImagePersonChat,
  InputMensage,
  ItemPersonChat,
  LastMensageChat,
  MenssageNameBot,
  MenssagePerson,
  MessageBot,
  NamePersonChat,
  PersonContentChat,
  TitleChat,
} from "./StyledChat";

const Chat = () => {
  const [userMessages, setUserMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [selectedBotMessages, setSelectedBotMessages] = useState([]);
  const [acceptMoney, setAcceptMoney] = useState(false);

  const [botTyping, setBotTyping] = useState(false);

  const botMessages1 = [
    "Hola, ¿cómo estás?",
    "Estoy bien, pero mejor ahora, ¿sabes...?",
    "Hoy pasé el día pensando en este momento, estaba deseando hablar con alguien.",
    "Cuéntame más sobre ti, te haré algunas preguntas aquí...",
    "¿Cuál es tu nombre y edad?",
    "¿Prefieres playa o cascada?",
    "¿Perro o gato?",
    "¿Tienes alguna fobia?",
    "¿Te consideras una mujer proactiva o pasiva en una relación?",
    "Wow, muy interesante saber eso. Me interesan las mujeres con características así, ¿sabías...?",
    "¿Qué más te interesa en un hombre, sé bien detallada...?",
    "Genial...",
    "Mmm, bueno saberlo.",
    "¡Interesante, eh...!",
    "Me gusta saber esa información, ¿sabías que acabas de describirte a ti misma...?",
    "Creo que mereces un regalo, ¿sabes...?",
    "¿Qué prefieres? ¿Una nevera o una televisión de 50 pulgadas?",
    "Perfecto, envíame tu dirección, lo enviaré a tu casa...",
    "Estoy a la espera, y ya te enviaré ese regalito...",
    "Listo, he hecho la compra para ti, pronto debería llegar a tu casa...",
  ];

  const botMessages2 = [
    "Hola querida, ¿cómo estás?",
    "Qué bueno encontrar a alguien tan interesante como tú, ¿qué te fascina de la vida?",
    "Guau, increíble. Me he sentido agotado últimamente, y en casa, mi esposa no tiene mucha paciencia conmigo. ¿Alguna vez has pasado por algo así?",
    "El trabajo está siendo una carga, empleados estresantes y, para empeorar las cosas, mi esposa no me apoya en nada.",
    "Parece que solo le interesa mi dinero...",
    "Pero basta de hablar de mí, quiero saber más sobre ti...",
    "Genial, cuéntame más.",
    "Dime, ¿qué te hace más feliz?",
    "Eso es maravilloso, también encuentro alegría en situaciones similares.",
    "Echo de menos tener tiempo para mí, como ir al cine, al gimnasio, jugar al fútbol...",
    "¿De dónde eres?",
    "Interesante, he estado por ahí algunas veces.",
    "Entonces, cuando visité allí, fue principalmente por trabajo. Tengo una sucursal de mi empresa en la región.",
    "Podrías considerar trabajar para mí, quizás sea mejor que lidiar con la mayoría de mis empleados...",
  ];

  const botMessages3 = [
    "Hola, ¿cómo estás?",
    "Qué bueno, me alegra escuchar eso. Sabes, estaba pensando en algo durante el día y quería compartirlo contigo.",
    "¿Alguna vez has pensado que a veces prestamos demasiada atención a personas que no conocen nuestra historia, nuestros traumas, luchas y permitimos que eso nos afecte... Deberíamos mirar hacia adentro y encontrar fuerzas para seguir adelante.",
    "Cuéntame un poco sobre lo que más te gusta hacer en tu tiempo libre. ¿Algún hobby especial?",
    "Ah, ¡genial! También me gusta, es una excelente manera de relajarse. Por cierto, hablando de eso, ¿cuál es tu canción favorita en este momento?",
    "Genial, le echaré un vistazo más tarde. Cambiando un poco de tema, ¿cuál es tu comida favorita? Soy un poco curioso con estas cosas.",
    "Interesante, debe ser una delicia. Ahora, dime, ¿has viajado a algún lugar que te haya marcado mucho? Tengo curiosidad por conocer nuevos lugares.",
    "¡Increíble! Parece una experiencia asombrosa. Y sobre los viajes, ¿prefieres la playa o la montaña?",
    "Está bien saberlo, cada uno tiene su encanto. Cambiando de tema, ¿tienes algún libro que te haya marcado mucho? Me encanta descubrir nuevas lecturas.",
    "Ah, entendido. Los libros de misterio tienen su encanto. Ahora, cuéntame, ¿cómo manejas las situaciones de estrés? ¿Alguna técnica especial?",
    "Genial, siempre es bueno tener algo que nos ayude a relajarnos. Hablando de eso, ¿practicas alguna actividad física regularmente?",
    "Bacán, creo que es super importante mantener el cuerpo activo. Cambiando un poco de tema, ¿prefieres café o té? ¿O ninguno de los dos?",
    "Entendido, yo también soy más de café, depende del día. Y hablando de preferencias, ¿te gustan más las mañanas o las noches?",
    "Genial, yo también soy más de la mañana, parece que cada momento del día tiene su magia. Bueno, ¡fue genial conocerte un poco más!",
    "Si hay algo que quieras preguntar, siéntete libre. Estoy aquí para conversar. 😊",
  ];

  const botMessages4 = [
    "Hola bebé, cómo estás?",
    "Qué bien, últimamente estoy bastante cansado, pero aparte de eso, estoy bien...",
    "Ah sí, entiendo, la cuestión es encontrar tiempo para descansar.",
    "Una vida muy agitada, no tengo tiempo libre.",
    "Tengo dinero de sobra, pero no tengo tiempo para usar el dinero...",
    "Me esforcé mucho para construir un imperio, pero soy esclavo de ese imperio.",
    "Problemas tras problemas y no sé cómo resolverlos.",
    "Alguna sugerencia?",
    "Es bastante complejo, pero en fin, háblame de ti.",
    "De dónde eres, nombre, edad y pasatiempos favoritos?",
    "No me gusta pensar que estoy hablando con una completa desconocida, vamos a conocernos...",
    "Genial!",
    "Tu nombre es hermoso, tus padres tenían muy buen gusto...",
    "Te gustan las películas?",
    "Genial, cuéntame, ¿cuáles son tus favoritas hoy?",
    "Entiendo, yo prefiero las películas clásicas, pero te diré... ni siquiera sé cuándo fue la última vez que vi una.",
    "Mira, me gusta hablar contigo.",
    "Quieres ganar un regalo?",
    "Genial, ¿prefieres una nueva cocina o un televisor?",
    "Perfecto, envíame alguna dirección para que pueda enviarte algo.",
    "Excelente, haciendo la compra aquí y enviándotelo...",
  ];

  const botMessages5 = [
    "Hola bebé, ¿cómo estás",
    "Qué bien, últimamente estoy bastante cansado, pero aparte de eso, estoy bien...",
    "Ah sí, entiendo, la cuestión es encontrar tiempo para descansar.",
    "Una vida muy agitada, no tengo tiempo libre.",
    "Tengo dinero de sobra, pero no tengo tiempo para usar el dinero...",
    "Me esforcé mucho para construir un imperio, pero soy esclavo de ese imperio.",
    "Problemas tras problemas y no sé cómo resolverlos.",
    "¿Alguna sugerencia",
    "Es bastante complejo, pero en fin, háblame de ti.",
    "¿De dónde eres, nombre, edad y pasatiempos favoritos",
    "No me gusta pensar que estoy hablando con una completa desconocida, vamos a conocernos...",
    "¡Genial!",
    "Tu nombre es hermoso, tus padres tenían muy buen gusto...",
    "¿Te gustan las películas",
    "Genial, cuéntame, ¿cuáles son tus favoritas hoy",
    "Entiendo, yo prefiero las películas clásicas, pero te diré... ni siquiera sé cuándo fue la última vez que vi una.",
    "Mira, me gusta hablar contigo.",
    "¿Quieres ganar un regalo",
    "Genial, ¿prefieres una nueva cocina o un televisor",
    "Perfecto, envíame alguna dirección para que pueda enviarte algo.",
    "Excelente, haciendo la compra aquí y enviándotelo...",
  ];

  useEffect(() => {
    const allBotMessages = [
      botMessages1,
      botMessages2,
      botMessages3,
      botMessages4,
    ];
    const randomIndex = Math.floor(Math.random() * allBotMessages.length);
    setSelectedBotMessages(allBotMessages[randomIndex]);
    fetchData();
  }, []);

  const simulateTyping = () => {
    setBotTyping(true);

    setTimeout(() => {
      setBotTyping(false);
      const nextBotMessage =
        selectedBotMessages[
          Math.floor(userMessages.length / 2) % selectedBotMessages.length
        ];
      setUserMessages((prevUserMessages) => [
        ...prevUserMessages,
        { sender: "bot", text: nextBotMessage },
      ]);
    }, 6000);
  };

  const handleSendMessage = () => {
    if (inputMessage) {
      setUserMessages([
        ...userMessages,
        { sender: "user", text: inputMessage },
      ]);
      setInputMessage(""); // Limpa o input
      simulateTyping();
      setAcceptMoney(true);
    }
  };

  const [dataChat, setDataChat] = useState([]);
  const emailUser = localStorage.getItem("email");

  const fetchData = () => {
    if (dataChat.length > 0) {
      return;
    }

    if (!emailUser) {
      console.error("Email do usuário não encontrado.");
      return;
    }

    fetch(`https://api.velhorico.xyz/getAllChat/${emailUser}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setDataChat(data[0]);
        console.log(data[0]);
      })
      .catch((error) => {
        console.error("", error);
      });
  };

  const data = {
    email: emailUser,
  };

  const addNewValueInUser = () => {
    fetch(`https://api.velhorico.xyz/newValueChat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log("Okay valor atualizado");
      })
      .catch((error) => {
        console.error("", error);

        console.log("erro");
      });
  };

  if (acceptMoney) {
    setInterval(addNewValueInUser, 60000);
  }
  return (
    <ContentChat>
      <TitleChat>Chat</TitleChat>
      <BoxContentMensage>
        {dataChat
          ? dataChat.map((item, index) => (
              <ItemPersonChat key={index}>
                <ImagePersonChat src={item.urlImageMatch} />
                <PersonContentChat>
                  <NamePersonChat>{item.nameMatch}</NamePersonChat>
                  <LastMensageChat>{item.InitMensage}</LastMensageChat>
                </PersonContentChat>
              </ItemPersonChat>
            ))
          : null}
      </BoxContentMensage>

      <BoxChatMensage>
        <MessageBot>
          {botTyping && <MenssageNameBot>Digitando...</MenssageNameBot>}

          {userMessages.map((message, index) =>
            message.sender === "user" ? (
              <MenssagePerson key={index}>{message.text}</MenssagePerson>
            ) : (
              <MenssageNameBot key={index}>{message.text}</MenssageNameBot>
            )
          )}

          <ContentInput>
            <InputMensage
              type="text"
              placeholder="Digite sua mensagem"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
            />
            <ButtonMensage onClick={handleSendMessage}>Enviar</ButtonMensage>
          </ContentInput>
        </MessageBot>
      </BoxChatMensage>
    </ContentChat>
  );
};

export default Chat;
