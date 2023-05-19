import './sale.css'

const products = [
    {
      id: 1,
      name: 'MUSTANG CARCOS-GT-87',
      href: '#',
      imageSrc: 'https://imgs.search.brave.com/Hq_YMw3lobp6TONT_zXRWyL4o1ILt46vjN2LGN9iVxE/rs:fit:1200:1040:1/g:ce/aHR0cHM6Ly93d3cu/Y2Fyc2Nvb3BzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OS8wNC85NWEzNzg3/YS1mb3JkLW11c3Rh/bmctYmVzdC1zZWxs/aW5nLXNwb3J0cy1j/YXItMjEuanBn',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$3567',
      color: 'Black',
    },
    {
        id: 2,
        name: 'MUSTANG PROVE-PONY',
        href: '#',
        imageSrc: 'https://imgs.search.brave.com/wK2rsad1ihK-nTd-MlHKUBtWzRMxNQXRGMUfskLlAU4/rs:fit:1200:628:1/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmhvdGNhcnNp/bWFnZXMuY29tL3dv/cmRwcmVzcy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8wOC9y/aW5nYnJvcy1zdGFu/Zy5qcGc',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$3532',
        color: 'Black',
      },
      {
        id: 3,
        name: 'MUSTANG 429 WITH G-18',
        href: '#',
        imageSrc: 'https://imgs.search.brave.com/5xxiI33X8W9pgTn6_R9rhIqF2_rMCzZ57NrEkuU2twI/rs:fit:1200:1067:1/g:ce/aHR0cHM6Ly9jYXJh/bmNlc3RyeS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTgv/MTEvNDgyOTk0Lmpw/Zw',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$3556',
        color: 'Black',
      },
      {
        id: 4,
        name: 'MUSTANG GT-APOLLO',
        href: '#',
        imageSrc: 'https://imgs.search.brave.com/GfHmPSMuuez45rs_6z_P4952_Fd_M5XmGPmbNJPvDTg/rs:fit:1200:1200:1/g:ce/aHR0cDovL2hkcXdh/bGxzLmNvbS93YWxs/cGFwZXJzL2ZvcmQt/bXVzdGFuZy1ndC1h/cG9sbG8tZWRpdGlv/bi1ocC5qcGc',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$2335',
        color: 'Black',
      },
      {
        id: 5,
        name: 'WIDEBOY MUSTANG',
        href: '#',
        imageSrc: 'https://imgs.search.brave.com/oL-UVti0DAVEnfr0KJcgCLm7UYyvQqUIwvMCf7CR4lU/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9jZG4u/ZHJpdmluZ2xpbmUu/Y29tL21lZGlhLzIz/MTMzNzkvbXVzdGFu/Z3J0cl9uaXR0b2lu/dm9fbG9wZW1hbi0x/LmpwZw',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$3544',
        color: 'Black',
      },
      {
        id: 6,
        name: 'BR-MUSTANG 508309-A',
        href: '#',
        imageSrc: 'https://imgs.search.brave.com/xJl2ubShOCVPoKtu_ZvnzZcX5AGxc5c5RhcwJdO_p3U/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93YWxs/dXAubmV0L3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE5LzA5LzY3/NjQyMy0xOTY1LWZv/cmQtbXVzdGFuZy1z/aGVsYnktZ3QtMzUw/LXByb3RvdHlwZS1j/bGFzc2ljLW9sZC1t/dXNjbGUtdXNhLTA1/LmpwZw',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$3500',
        color: 'Black',
      },
      {
        id: 7,
        name: 'GT-567 MUSTANG FALITO',
        href: '#',
        imageSrc: 'https://imgs.search.brave.com/5-HiqT0SPLXgmfdmXXtpSHwMzzkkZmoeZ77iyFrHBiY/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2QwLzdm/LzhjL2QwN2Y4YzQ2/NmJhM2E1MDRiMGJh/ODljNjVhZDhkNjNm/LmpwZw',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$1508',
        color: 'Black',
      },
      {
        id: 8,
        name: ' Mustang Gt - Rapid Red Metallic GT500',
        href: '#',
        imageSrc: 'https://imgs.search.brave.com/pXGfBVi2bq2RbBXMBsoiw1Ze-XZqQd25W2Yx4SUYVM4/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/ZmluZG1lY2Fycy5j/b20uYXUvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjAvMTAvMjAx/Ny1Gb3JkLU11c3Rh/bmctR1QtTWFudWFs/LUZNQy01LmpwZw',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35076',
        color: 'Black',
      },
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white" id="nl">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight">Mustang Collections</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-white">
                      <a href={product.href} id='srt'>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                  </div>
                  {/* <p className="text-sm font-medium text-white">{product.price}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  