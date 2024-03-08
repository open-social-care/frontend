import auth from "@/auth";

export default function page() {
  const { user } = auth();

  return (
    <div className="mt-4 overflow-scroll rounded-xl bg-teal-600 p-4 text-sm text-white">
      <p>DEBUG User:</p>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
