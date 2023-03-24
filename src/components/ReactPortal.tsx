import ReactDOM from 'react-dom';

interface ReactPortalProps {
  portalId?: string;
  children: React.ReactNode;
}

export default function ReactPortal({
  portalId = 'portal-root', 
  children
}: ReactPortalProps){
  const container = document.getElementById(portalId);

  if (!container) {
    const container = document.createElement('div');
    container.setAttribute('id', portalId);
    document.body.appendChild(container);
  }

  return ReactDOM.createPortal(
    children,
    document.getElementById(portalId) as Element
  );
}