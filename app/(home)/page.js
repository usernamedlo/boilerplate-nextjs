import ClientOnly from "@/src/feature/layout/ClientOnly";
import Container from "@/components/ui/container";
import { getAuthSession } from "@/lib/auth";

export default async function Home() {
  const currentUser = await getAuthSession();

  return (
    <ClientOnly>
      <Container>
        <div className="space-y-10 pb-10">
          {currentUser && (
            <>
              <pre className="text-center">
                {JSON.stringify(currentUser, null, 2)}
              </pre>
            </>
          )}
        </div>
      </Container>
    </ClientOnly>
  );
}
