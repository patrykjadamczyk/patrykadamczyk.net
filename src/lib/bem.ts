/**
 * BEM CSS Class Name
 * @author Patryk Adamczyk <patrykadamczyk@patrykadamczyk.net>
 * @copyright Patryk Adamczyk © 2019
 */
export default class BEM_ClassName
{
    /**
     * Property holding current classname
     */
    classname = "";
    constructor()
    {
        this.classname = "";
        this.get = this.get.bind(this);
        this.module = this.module.bind(this);
        this.block = this.block.bind(this);
        this.element = this.element.bind(this);
        this.modifier = this.modifier.bind(this);
    }
    /**
     * Get Class Name
     * @returns {string} Class Name
     */
    get(): string
    {
        return this.classname;
    }
    /**
     * Make a module
     * !: This resets Class Name
     * @param {string} module Module
     * @returns {any} BEM_ClassName Object
     */
    module(module: string): any
    {
        this.classname = `MODULE__${module}`;
        return this;
    }
    /**
     * Make a block
     * !: This resets Class Name
     * @param {string} block Block
     * @returns {any} BEM_ClassName Object
     */
    block(block: string): any
    {
        this.classname = block;
        return this;
    }
    /**
     * Make a Element
     * @param {string} element Element
     * @returns {any} BEM_ClassName Object
     */
    element(element: string): any
    {
        this.classname = `${this.classname}__${element}`;
        return this;
    }
    /**
     * Make a Modifier
     * @param {string} modifier Modifier
     * @returns {any} BEM_ClassName Object
     */
    modifier(modifier: string): any
    {
        this.classname = `${this.classname}--${modifier}`;
        return this;
    }
}
