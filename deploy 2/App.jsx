// App entrypoint

function App() {
  const [toast, setToast] = React.useState({ visible: false, message: "" });

  const showToast = (message) => {
    setToast({ visible: true, message });
    setTimeout(() => setToast((t) => ({ ...t, visible: false })), 3000);
  };

  const onRegister = () => showToast(<>Реєстрація відкривається <b>11 серпня 2026</b></>);

  const onNotionPlan = () => showToast(<>Підстав посилання на свій Notion-документ · <b>Action Plan</b></>);
  const onNotionRisks = () => showToast(<>Підстав посилання на свій Notion-документ · <b>Матриця ризиків</b></>);

  return (
    <>
      <PitchBand/>
      <TopNav onRegister={onRegister}/>
      <Hero onRegister={onRegister}/>
      <PartnerBand/>
      <Facts/>
      <Audience/>
      <ProgrammeStructure/>
      <LectureGrid/>
      <Cases/>
      <Outcomes/>
      <ActionPlan onNotion={onNotionPlan}/>
      <RiskMatrix onNotion={onNotionRisks}/>
      <Metrics/>
      <FAQ/>
      <Footer/>
      <Toast visible={toast.visible} message={toast.message}/>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
