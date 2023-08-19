/* import Button from "@/components/button/Button" */
import "@/components/css/demo1.css"

export default function HomeTitle() {

  return (
    <div style={{ zIndex: 20, position: 'absolute', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
      <h2 className="content__title">7dev</h2>
      <h3 className="content__subtitle">Desarrollo Aplicaciones Web</h3>
      <h3 className="content__subsubtitle">(Click the Ball & magic appears)</h3>
    </div>

  )
}