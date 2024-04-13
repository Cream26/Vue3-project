export interface ResponseData {
  code: number
  message: string
  ok: boolean
}

//SPU数据的ts类型:需要修改
export interface SpuData {
  category3Id: string | number
  id?: number
  spuName: string
  tmId: number | string
  description: string
  //已有SPU的图片地址
  spuImageList: null | SpuImg[]
  //已有SPU的销售属性
  spuSaleAttrList: null | SaleAttr[]
}
//数组:元素都是已有SPU数据类型
export type Records = SpuData[]
//定义获取已有的SPU接口返回的数据ts类型
export interface HasSpuResponseData extends ResponseData {
  data: {
    records: Records
    total: number
    size: number
    current: number
    searchCount: boolean
    pages: number
  }
}

//品牌数据的TS类型
export interface Trademark {
  id: number
  tmName: string
  logoUrl: string
}
//品牌接口返回的数据ts类型
export interface AllTradeMark extends ResponseData {
  data: Trademark[]
}

//商品图片的ts类型
export interface SpuImg {
  id?: number
  imgName?: string
  imgUrl?: string
  createTime?: string
  updateTime?: string
  spuId?: number
  name?: string
  url?: string
}
//已有的SPU的照片墙数据的类型
export interface SpuHasImg extends ResponseData {
  data: SpuImg[]
}

//已有的销售属性值对象ts类型
export interface SaleAttrValue {
  id?: number
  createTime?: null
  updateTime?: null
  spuId?: number
  baseSaleAttrId: number | string
  saleAttrValueName: string
  saleAttrName?: string
  isChecked?: null
}
//存储已有的销售属性值数组类型
export type SpuSaleAttrValueList = SaleAttrValue[]

//销售属性对象ts类型
export interface SaleAttr {
  id?: number
  createTime?: null
  updateTime?: null
  spuId?: number
  baseSaleAttrId: number | string
  saleAttrName: string
  spuSaleAttrValueList: SpuSaleAttrValueList
  flag?: boolean
  saleAttrValue?: string
}
export interface SaleAttrResponseData extends ResponseData {
  data: SaleAttr[]
}

//已有的全部SPU的返回数据ts类型
export interface HasSaleAttr {
  id: number
  name: string
}

export interface HasSaleAttrResponseData extends ResponseData {
  data: HasSaleAttr[]
}

export interface Attr {
  attrId: number | string //平台属性的ID
  valueId: number | string //属性值的ID
}

export interface saleArr {
  saleAttrId: number | string //属性ID
  saleAttrValueId: number | string //属性值的ID
}
export interface SkuData {
  category3Id: string | number
  spuId: string | number //已有的SPU的ID
  tmId: string | number //SPU品牌的ID
  skuName: string
  price: string | number //sku价格
  weight: string | number //sku重量
  skuDesc: string //sku的描述
  skuAttrValueList?: Attr[]
  skuSaleAttrValueList?: saleArr[]
  skuDefaultImg: string //sku图片地址
}

export interface SkuInfoData extends ResponseData {
  data: SkuData[]
}

// ResponseData: 这是一个通用的响应格式，包括了code、message和ok三个字段，用于几乎所有的API响应，表明请求是否成功，以及附加的状态码和消息。

// SpuData: 代表了一个特定的产品单位（SPU），其中包含了多种信息，如分类ID（category3Id）、品牌ID（tmId）、产品名称（spuName）、描述（description）、产品图片列表（spuImageList）和销售属性列表（spuSaleAttrList）。

// Trademark: 代表品牌信息，包括品牌ID、品牌名称和品牌logo的URL。

// SpuImg: 代表单个产品的图片信息，包含图片ID、图片名称、图片URL等信息。

// SaleAttr 和 SaleAttrValue: 描述产品的销售属性，例如颜色、尺寸等，SaleAttr是更高一层的属性（如颜色），而SaleAttrValue是具体的属性值（如红色）。

// SkuData: SKU（Stock Keeping Unit）即库存量单位，表示一个具体的商品项，包含了与SPU相同的一些字段如分类ID和品牌ID，但是更具体到商品的价格、重量、描述以及唯一的SKU名称和默认图片等
