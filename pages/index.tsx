import styles from "../styles/Home.module.css";
import {
  Container,
  Button,
  Input,
  Spacer,
  Checkbox,
  Avatar,
  Link,
  Text,
} from "@nextui-org/react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Container
        as="div"
        display="flex"
        direction="column"
        alignItems="center"
        style={{ marginTop: "12vh", marginBottom: "12vh" }}
      >
        <Avatar
          src="/default.jpg"
          alt="User Profile"
          size={128}
          color="gradient"
          bordered
        />
        <Spacer y={3} />
        <form>
          <Input
            type="email"
            width="18rem"
            size="large"
            labelPlaceholder="Email"
            clearable
          />
          <Spacer y={2} />
          <Input.Password
            width="18rem"
            size="large"
            labelPlaceholder="Password"
            clearable
          />
          <Spacer />
          <Container
            as="div"
            display="flex"
            direction="row"
            justify="space-between"
          >
            <Checkbox size="small" label="Ingat saya" checked />
            <Link color underline href="#">
              Lupa password?
            </Link>
          </Container>
          <Spacer y={2} />
          <Button shadow color="gradient" style={{ width: 18 + "rem" }}>
            Login
          </Button>
        </form>
        <Spacer y={1.5} />
        <Link color="#333" underline href="#">
          Belum punya akun? Registrasi
        </Link>
      </Container>
    </div>
  );
}
