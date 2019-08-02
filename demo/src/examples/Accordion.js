import React from 'react';
import { Accordion, AccordionItem, AccordionContent, AccordionToggle } from '@patternfly/react-core';

class SimpleAccordion extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      expanded: 'ex-toggle2'
    };
  }

  render() {
     const onToggle = id => {
      if (id === this.state.expanded) {
        this.setState({expanded: ''});
      } else {
        this.setState({expanded: id });
      }
    };
    return (
      <Accordion>
        <AccordionItem>
          <AccordionToggle
            onClick={() => {onToggle('ex-toggle1');}}
            isExpanded={this.state.expanded==='ex-toggle1'}
            id="ex-toggle1"
          >
            Item One
          </AccordionToggle>
          <AccordionContent
            id="ex-expand1"
            isHidden={this.state.expanded !== 'ex-toggle1'}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionToggle
            onClick={() => {onToggle('ex-toggle2');}}
            isExpanded={this.state.expanded === 'ex-toggle2'}
            id="ex-toggle2"
          >
            Item Two
          </AccordionToggle>
          <AccordionContent
            id="ex-expand2"
            isHidden={this.state.expanded !=='ex-toggle2'}
          >
            <p>
              Vivamus et tortor sed arcu congue vehicula eget et diam. Praesent nec dictum lorem. Aliquam id diam
              ultrices, faucibus erat id, maximus nunc.
            </p>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem>
          <AccordionToggle
            onClick={() => {onToggle('ex-toggle3');}}
            isExpanded={this.state.expanded === 'ex-toggle3'}
            id="ex-toggle3"
          >
            Item Three
          </AccordionToggle>
          <AccordionContent
            id="ex-expand3"
            isHidden={this.state.expanded !== 'ex-toggle3'}
          >
            <p>Morbi vitae urna quis nunc convallis hendrerit. Aliquam congue orci quis ultricies tempus.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionToggle
            onClick={() => {onToggle('ex-toggle4');}}
            isExpanded={this.state.expanded === 'ex-toggle4'}
            id="ex-toggle4"
          >
            Item Four
          </AccordionToggle>
          <AccordionContent
            id="ex-expand4"
            isHidden={this.state.expanded !== 'ex-toggle4'}
          >
            <p>
              Donec vel posuere orci. Phasellus quis tortor a ex hendrerit efficitur. Aliquam lacinia ligula pharetra,
              sagittis ex ut, pellentesque diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Vestibulum ultricies nulla nibh. Etiam vel dui fermentum ligula ullamcorper
              eleifend non quis tortor. Morbi tempus ornare tempus. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Mauris et velit neque. Donec ultricies condimentum mauris,
              pellentesque imperdiet libero convallis convallis. Aliquam erat volutpat. Donec rutrum semper tempus.
              Proin dictum imperdiet nibh, quis dapibus nulla. Integer sed tincidunt lectus, sit amet auctor eros.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionToggle
            onClick={() => {onToggle('ex-toggle5');}}
            isExpanded={this.state.expanded === 'ex-toggle5'}
            id="ex-toggle5"
          >
            Item Five
          </AccordionToggle>
          <AccordionContent
            id="ex-expand5"
            isHidden={this.state.expanded !== 'ex-toggle5'}

          >
            <p>Vivamus finibus dictum ex id ultrices. Mauris dictum neque a iaculis blandit.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }
}

export default SimpleAccordion;