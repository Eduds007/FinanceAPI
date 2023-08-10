import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { createSwaggerSpec } from 'next-swagger-doc';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic<{
  spec: any;
}>(import('swagger-ui-react'), { ssr: false });

function ApiDoc({ spec }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <SwaggerUI spec={spec} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const spec: Record<string, any> = createSwaggerSpec({
    definition: {
      
      openapi: '3.0.0',
      info: {
        title: 'InvistAPI Docs',
        description: "Documentação da InvistAPI",
        version: '0.1',
        termsOfService: "#",
        contact: {
          email:"eduardomilanezaraujo@gmail.com"
        }
      },
      host: "http://localhost:3000",
      basePath:"/api",
      
    },
  });

  return {
    props: {
      spec,
    },
  };
};

export default ApiDoc;