import ContactsPage from "./pages/ContactsPage";
import { Contacts } from "./data/contacts";

const App = () => {
  return <ContactsPage contacts={Contacts} />;
};

export default App;
