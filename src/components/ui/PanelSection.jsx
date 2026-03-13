import { cn } from "../../utils/cn";
import Container from "./Container";

export default function PanelSection({
  children,
  sectionClassName = "",
  panelClassName = "",
  containerClassName = "",
}) {
  return (
    <section className={cn("section-space", sectionClassName)}>
      <Container className={containerClassName}>
        <div className={cn("panel-shell", panelClassName)}>{children}</div>
      </Container>
    </section>
  );
}
