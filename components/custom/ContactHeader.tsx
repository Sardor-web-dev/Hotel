import Header from "./Header"

function ContactHeader() {
  return (
    <section className="w-full flex flex-col h-[455px] bg-[#14274A]">
        <div className="flex flex-col w-[1250px] items-center justify-center gap-30 mx-auto">
            <Header/>
            <p className="text-white text-5xl font-semibold">CONTACT-US</p>
        </div>
    </section>
  )
}

export default ContactHeader