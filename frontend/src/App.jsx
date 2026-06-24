
function App() {
  return (
    <>
      <div className="flex min-h-screen overflow-hidden">
        <Sidebar />
        <main className="main flex-1 overflow-y-auto h-screen">
          <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/pickup" element={<Pickup />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
